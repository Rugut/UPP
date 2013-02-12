
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class РегистрацияВИФНС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("67230299-cc8c-48c3-87af-6812ca8526d2");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190818.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public Guid Владелец {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*4*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///Код причины постановки
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(9)*/ КПП {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(254)*/ НаименованиеИФНС {get;set;}//Наименование ИФНС
		///<summary>
		///Представитель в территориальном органе ФНС
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public object Представитель {get;set;}
		///<summary>
		///Название документа, подтверждающего полномочия представителя
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(1000)*/ ДокументПредставителя {get;set;}//Документ представителя
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ УполномоченноеЛицоПредставителя {get;set;}//Уполномоченное лицо представителя
		///<summary>
		///Доверенность налогоплательщика на представителя
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ДоверенностиНалогоплательщика Доверенность {get;set;}

		public V82.СправочникиОбъект.РегистрацияВИФНС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.РегистрацияВИФНС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.КПП = КПП;
			Объект.НаименованиеИФНС = НаименованиеИФНС;
			Объект.Представитель = Представитель;
			Объект.ДокументПредставителя = ДокументПредставителя;
			Объект.УполномоченноеЛицоПредставителя = УполномоченноеЛицоПредставителя;
			Объект.Доверенность = Доверенность;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}