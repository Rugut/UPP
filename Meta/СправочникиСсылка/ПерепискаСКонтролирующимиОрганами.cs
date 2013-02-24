
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
	public partial class ПерепискаСКонтролирующимиОрганами:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("46554297-cebf-46ff-9713-4320b333abcd");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191212.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*150*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.ТипыПерепискиСКонтролирующимиОрганами Тип {get;set;}
		public V82.Перечисления/*Ссылка*/.СтатусыПисем Статус {get;set;}
		///<summary>
		///Вспомогательное поле для реализации отбора по организации
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public object Отправитель {get;set;}
		public object Получатель {get;set;}
		public string/*(0)*/ Содержание {get;set;}
		public DateTime ДатаСообщения {get;set;}//Дата сообщения
		public DateTime ДатаОтправки {get;set;}//Дата отправки
		public string/*(36)*/ Идентификатор {get;set;}
		public string/*(36)*/ ИдентификаторОснования {get;set;}//Идентификатор основания
		public bool Ретроконверсия {get;set;}

		public V82.СправочникиОбъект.ПерепискаСКонтролирующимиОрганами  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПерепискаСКонтролирующимиОрганами();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Тип = Тип;
			Объект.Статус = Статус;
			Объект.Организация = Организация;
			Объект.Отправитель = Отправитель;
			Объект.Получатель = Получатель;
			Объект.Содержание = Содержание;
			Объект.ДатаСообщения = ДатаСообщения;
			Объект.ДатаОтправки = ДатаОтправки;
			Объект.Идентификатор = Идентификатор;
			Объект.ИдентификаторОснования = ИдентификаторОснования;
			Объект.Ретроконверсия = Ретроконверсия;
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