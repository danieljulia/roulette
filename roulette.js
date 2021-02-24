
        class Roulette {
            constructor(props) {
  
              if(props.num_sectors==undefined) props.num_sectors=36;
              this.num_sectors = props.num_sectors;
  
              if(props.speed==undefined) props.speed=0.05;
              this.speed = props.speed;
        

              if(props.width==undefined) props.width=300;
              this.width = props.width;
  
              if(props.margin==undefined) props.margin=0;
              this.margin=props.margin;
                
              if(props.colors==undefined){
                  props.colors=[];
                  for(let i=0;i<this.num_sectors;i++){
                    props.colors[i]=this.getColor();
                  }
              }
              this.colors=props.colors;
              this.current_sector=0;
              this.last_sector=-1;

              this.alpha=0;
              this.svg= document.createElement("svg");
              this.id="roulette"+this.random(10000);
              this.svg.setAttribute("id", this.id);
              this.svg.setAttribute("viewBox", "0 0 "+this.width+" "+this.width);
              this.svg.setAttribute("width", this.width);
              this.svg.setAttribute("height", this.width);

            /*
              this.center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              this.center.setAttribute( 'fill', '#fff' );
              this.center.setAttribute( 'cx', this.width/2 );
              this.center.setAttribute( 'cy', this.width/2 );
              this.center.setAttribute( 'r', 100 );
              this.svg.appendChild( this.center );
*/

              this.ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              this.ball.setAttribute( 'fill', '#000' );
              this.ball.setAttribute( 'r', this.width/20 );
              this.ball.setAttribute( 'class', 'ball' );
              this.ball.setAttribute( 'cx', this.width/2 );
              this.ball.setAttribute( 'cy', this.width/2 );
              this.svg.appendChild( this.ball );
  
              this.elem_id=props.elem_id;
              var elem=document.getElementById(props.elem_id);
              elem.appendChild( this.svg );
              this.create();
            }
  
            onChange(sector){
               //event
            }

              random(num){
                  return Math.floor(Math.random()*num);
              }
  
              polarToCartesian(centerX, centerY, radius, angleInDegrees) {
                  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  
                  return {
                      x: centerX + (radius * Math.cos(angleInRadians)),
                      y: centerY + (radius * Math.sin(angleInRadians))
                  };
              }
          
              create(){
                  var pas=360/this.num_sectors;
  
                  for(var i=0;i<this.num_sectors;i++){
                      this.createArc(i,(i-0.5)*pas+this.margin/2,(i+1-0.5)*pas-this.margin/2);
                  }
                   document.getElementById(this.elem_id).innerHTML += "";
                   requestAnimationFrame(this.update.bind(this));
              }
  
              getSvg(){
                  return this.svg;
              }
              setBackground(color){
              
               }

              update(){
                   

                  var bola_x=this.width/2+Math.sin(this.alpha)*this.width*5/12;
                  var bola_y=this.width/2-Math.cos(-this.alpha)*this.width*5/12;
             
                  this.alpha+=this.speed;
                if(this.alpha>2*Math.PI) this.alpha=this.alpha-2*Math.PI;

                  //compute current sector
                  this.current_sector=Math.round(this.alpha*this.num_sectors/(2*Math.PI));
                    if(this.current_sector!=this.last_sector){
                        this.onChange(this.current_sector);
                        this.last_sector=this.current_sector;
                    }
                  var ball=document.getElementById(this.id).getElementsByClassName("ball")[0];
                  ball.setAttribute("cx", bola_x);
                  ball.setAttribute("cy", bola_y);
               
                  requestAnimationFrame(this.update.bind(this));
              }
  
              // arc
          createArc(id,start,end){
              var node = document.createElement("path");
              node.setAttribute("id", 'arc'+id);
              node.setAttribute("stroke", 'rgba(0,0,0,0)');
              node.setAttribute("stroke-width", '2');
              node.setAttribute("fill-rule", 'evenodd');
  
             this.svg.appendChild(node);
             
              var opts = {
                  cx: this.width/2,
                  cy: this.width/2,
                  radius: this.width/3,
                  start_angle: start,
                  end_angle: end,
                  thickness: this.width/6
              };
  
              var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle);
              var end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle);
              var largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";
  
              var cutout_radius = opts.radius - opts.thickness,
                      start2 = this.polarToCartesian(opts.cx, opts.cy, cutout_radius, opts.end_angle),
                      end2 = this.polarToCartesian(opts.cx, opts.cy, cutout_radius, opts.start_angle),
  
  
  
              d = [
                  "M", start.x, start.y,
                  "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                  "L", opts.cx, opts.cy,
                  "Z",
  
                  "M", start2.x, start2.y,
                  "A", cutout_radius, cutout_radius, 0, largeArcFlag, 0, end2.x, end2.y,
                  "L", opts.cx, opts.cy,
                  "Z"
              ].join(" ");
  
              document.getElementById('arc'+id).setAttribute("d", d);
              document.getElementById('arc'+id).setAttribute("fill", this.colors[id]);
             
          }
          
          getColor(){
              return "hsl(" + 360 * Math.random() + ',' +
                   (25 + 70 * Math.random()) + '%,' +
                   (35 + 10 * Math.random()) + '%)'
          }
  
  
          }
  