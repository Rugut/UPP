
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ќбщиеќбъекты;
using V82.—правочники—сылка;
using V82.ƒокументы—сылка;
using V82.ѕеречислени€;//—сылка;
namespace V82.—правочники—сылка
{
	[ProtoContract]
	[DataContract]
	public partial class  урсыќбучени€:—правочник—сылка,I—ериализаторProtoBuf,I—ериализаторJson
	{
		public static readonly Guid √уид ласса = new Guid("0ba658fc-b975-4c48-b839-01203b472215");
		public static readonly DateTime ¬ерси€ ласса = DateTime.ParseExact("20121221191851.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long  онтрольна€—умма ласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid —сылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long ¬ерси€ {get;set;}
		/*static хэш сумма состава и пор€дка реквизитов*/
		/*верси€ класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ѕометка”далени€ {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool ѕредопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public bool Ёто√руппа {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid –одитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*150*/ Ќаименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ ќписание урса {get;set;}//ќписание курса
		///<summary>
		///ƒлительность курса в часах
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(8.2)*/ ƒлительность урса {get;set;}//ƒлительность курса
		///<summary>
		///—редний размер затрат на обучение одного сотрудника на данном курсе
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(10.2)*/ «атратыЌаќдногоќбучающегос€ {get;set;}//«атраты на одного обучающегос€
		///<summary>
		///¬ид выдаваемого документа после обучени€
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.—правочники—сылка.ƒокументыќбќбразовании ¬идƒокументаќбќбразовании {get;set;}//¬ид документа об образовании
		[DataMember]
		[ProtoMember(12)]
		public V82.—правочники—сылка.¬алюты ¬алюта {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public bool ќтражать¬–ег”чете {get;set;}//ќтражать в рег учете

		public V82.—правочникиќбъект. урсыќбучени€  ѕолучитьќбъект()
		{
			var ќбъект = new V82.—правочникиќбъект. урсыќбучени€();
			ќбъект._ЁтоЌовый = false;
			ќбъект.—сылка = —сылка;
			ќбъект.¬ерси€ = ¬ерси€;
			ќбъект.ѕометка”далени€ = ѕометка”далени€;
			ќбъект.ѕредопределенный = ѕредопределенный;
			ќбъект.Ёто√руппа = Ёто√руппа;
			ќбъект.–одитель = –одитель;
			ќбъект.Ќаименование = Ќаименование;
			ќбъект.ќписание урса = ќписание урса;
			ќбъект.ƒлительность урса = ƒлительность урса;
			ќбъект.«атратыЌаќдногоќбучающегос€ = «атратыЌаќдногоќбучающегос€;
			ќбъект.¬идƒокументаќбќбразовании = ¬идƒокументаќбќбразовании;
			ќбъект.¬алюта = ¬алюта;
			ќбъект.ќтражать¬–ег”чете = ќтражать¬–ег”чете;
			return ќбъект;
		}

		public void —ериализаци€ProtoBuf(Stream ѕоток)
		{
			Serializer.Serialize(ѕоток,this);
		}
		
		public string —ериализаци€Json()
		{
			return this.ToJson();
		}
		
		public string —ериализаци€Xml()
		{
			return this.ToXml();
		}
	}
}
