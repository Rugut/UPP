
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
	public partial class ПоказателиСхемМотивации:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d03cb594-8587-490b-bb44-4dbc80c0781d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191518.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.ТипыПоказателейСхемМотивации ТипПоказателя {get;set;}//Тип показателя
		public V82.Перечисления/*Ссылка*/.ИзменениеПоказателейСхемМотивации ВозможностьИзменения {get;set;}//Возможность изменения
		public V82.Перечисления/*Ссылка*/.ВидыПоказателейСхемМотивации ВидПоказателя {get;set;}//Вид показателя
		public bool ПоказательЭффективности {get;set;}//Показатель эффективности
		public string/*(100)*/ Идентификатор {get;set;}
		public bool ТарифнаяСтавка {get;set;}//Тарифная ставка
		public V82.СправочникиСсылка.ПоказателиСхемМотивации ФактическийПоказатель {get;set;}//Фактический показатель
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаСуммыПоказателей СпособРасчетаСуммы {get;set;}//Способ расчета суммы
		public V82.СправочникиСсылка.ПоказателиСхемМотивации СуммируемыйПоказатель {get;set;}//Суммируемый показатель 
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		public V82.СправочникиСсылка.ВидыСтажа ВидСтажа {get;set;}//Вид стажа

		public V82.СправочникиОбъект.ПоказателиСхемМотивации  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПоказателиСхемМотивации();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ТипПоказателя = ТипПоказателя;
			Объект.ВозможностьИзменения = ВозможностьИзменения;
			Объект.ВидПоказателя = ВидПоказателя;
			Объект.ПоказательЭффективности = ПоказательЭффективности;
			Объект.Идентификатор = Идентификатор;
			Объект.ТарифнаяСтавка = ТарифнаяСтавка;
			Объект.ФактическийПоказатель = ФактическийПоказатель;
			Объект.СпособРасчетаСуммы = СпособРасчетаСуммы;
			Объект.СуммируемыйПоказатель = СуммируемыйПоказатель;
			Объект.Валюта = Валюта;
			Объект.ВидСтажа = ВидСтажа;
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