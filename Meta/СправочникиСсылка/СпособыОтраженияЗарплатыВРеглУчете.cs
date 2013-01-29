
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
	///<summary>
	///(–егл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class —пособыќтражени€«арплаты¬–егл”чете:—правочник—сылка,I—ериализаторProtoBuf,I—ериализаторJson
	{
		public static readonly Guid √уид ласса = new Guid("96d81af6-9a15-4c01-98e9-f1f64ad5031b");
		public static readonly DateTime ¬ерси€ ласса = DateTime.ParseExact("20121221191301.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Ќаименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public object —четƒт {get;set;}//—чет ƒт
		[DataMember]
		[ProtoMember(9)]
		public object —убконтоƒт1 {get;set;}//—убконто ƒт номер 1
		[DataMember]
		[ProtoMember(10)]
		public object —убконтоƒт2 {get;set;}//—убконто ƒт номер 2
		[DataMember]
		[ProtoMember(11)]
		public object —убконтоƒт3 {get;set;}//—убконто ƒт номер 3
		[DataMember]
		[ProtoMember(12)]
		public V82.—правочники—сылка.—пособы–аспределени€«атратЌа¬ыпуск —пособ–аспределени€«атрат {get;set;}//—пособ распределени€ затрат
		[DataMember]
		[ProtoMember(13)]
		public object —чет т {get;set;}//—чет  т
		[DataMember]
		[ProtoMember(14)]
		public object —убконто т1 {get;set;}//—убконто  т номер 1
		[DataMember]
		[ProtoMember(15)]
		public object —убконто т2 {get;set;}//—убконто  т номер 2
		[DataMember]
		[ProtoMember(16)]
		public object —убконто т3 {get;set;}//—убконто  т номер 3
		[DataMember]
		[ProtoMember(17)]
		public object —четƒтЌ” {get;set;}//—чет дебета налогового учета
		[DataMember]
		[ProtoMember(18)]
		public object —убконтоƒтЌ”1 {get;set;}//—убконто ƒт нал. учета номер 1
		[DataMember]
		[ProtoMember(19)]
		public object —убконтоƒтЌ”2 {get;set;}//—убконто ƒт нал. учета номер 2
		[DataMember]
		[ProtoMember(20)]
		public object —убконтоƒтЌ”3 {get;set;}//—убконто ƒт нал. учета номер 3
		[DataMember]
		[ProtoMember(21)]
		public object —чет тЌ” {get;set;}//—чет кредита налогового учета
		[DataMember]
		[ProtoMember(22)]
		public object —убконто тЌ”1 {get;set;}//—убконто  т нал. учета номер 1
		[DataMember]
		[ProtoMember(23)]
		public object —убконто тЌ”2 {get;set;}//—убконто  т нал. учета номер 2
		[DataMember]
		[ProtoMember(24)]
		public object —убконто тЌ”3 {get;set;}//—убконто  т нал. учета номер 3
		[DataMember]
		[ProtoMember(25)]
		public V82.ѕеречислени€/*—сылка*/.ќтражение¬”—Ќ ќтражение¬”—Ќ {get;set;}//ќтражение ¬”—Ќ
		[DataMember]
		[ProtoMember(26)]
		public V82.—правочники—сылка.ѕодразделени€ќрганизаций ѕодразделениеƒт {get;set;}//ѕодразделение ƒт
		[DataMember]
		[ProtoMember(27)]
		public V82.—правочники—сылка.ѕодразделени€ќрганизаций ѕодразделение т {get;set;}//ѕодразделение  т
		[DataMember]
		[ProtoMember(28)]
		public V82.ѕеречислени€/*—сылка*/.¬идыЌачисленийќплаты“рудаѕо—т255Ќ  ¬идЌачисленийќплаты“рудаѕо—татье255Ќ  {get;set;}//¬ид начислений оплаты труда по статье255 Ќ 

		public V82.—правочникиќбъект.—пособыќтражени€«арплаты¬–егл”чете  ѕолучитьќбъект()
		{
			var ќбъект = new V82.—правочникиќбъект.—пособыќтражени€«арплаты¬–егл”чете();
			ќбъект._ЁтоЌовый = false;
			ќбъект.—сылка = —сылка;
			ќбъект.¬ерси€ = ¬ерси€;
			ќбъект.ѕометка”далени€ = ѕометка”далени€;
			ќбъект.ѕредопределенный = ѕредопределенный;
			ќбъект.Ёто√руппа = Ёто√руппа;
			ќбъект.–одитель = –одитель;
			ќбъект.Ќаименование = Ќаименование;
			ќбъект.—четƒт = —четƒт;
			ќбъект.—убконтоƒт1 = —убконтоƒт1;
			ќбъект.—убконтоƒт2 = —убконтоƒт2;
			ќбъект.—убконтоƒт3 = —убконтоƒт3;
			ќбъект.—пособ–аспределени€«атрат = —пособ–аспределени€«атрат;
			ќбъект.—чет т = —чет т;
			ќбъект.—убконто т1 = —убконто т1;
			ќбъект.—убконто т2 = —убконто т2;
			ќбъект.—убконто т3 = —убконто т3;
			ќбъект.—четƒтЌ” = —четƒтЌ”;
			ќбъект.—убконтоƒтЌ”1 = —убконтоƒтЌ”1;
			ќбъект.—убконтоƒтЌ”2 = —убконтоƒтЌ”2;
			ќбъект.—убконтоƒтЌ”3 = —убконтоƒтЌ”3;
			ќбъект.—чет тЌ” = —чет тЌ”;
			ќбъект.—убконто тЌ”1 = —убконто тЌ”1;
			ќбъект.—убконто тЌ”2 = —убконто тЌ”2;
			ќбъект.—убконто тЌ”3 = —убконто тЌ”3;
			ќбъект.ќтражение¬”—Ќ = ќтражение¬”—Ќ;
			ќбъект.ѕодразделениеƒт = ѕодразделениеƒт;
			ќбъект.ѕодразделение т = ѕодразделение т;
			ќбъект.¬идЌачисленийќплаты“рудаѕо—татье255Ќ  = ¬идЌачисленийќплаты“рудаѕо—татье255Ќ ;
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
