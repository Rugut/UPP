
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
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТипыСкидокНаценок:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("10d02b81-c725-40ba-bc12-85b61427b0c4");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191555.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*25*/ Наименование {get;set;}
		///<summary>
		///(Общ) Валюта, в которой задана скидка 
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		///<summary>
		///Удалить (Общ) Истина -  скидка действует для всех номенклатурных позиций, иначе - только для заданных в регистре сведений Скидки
		///</summary>
		public bool ДляВсейНоменклатуры {get;set;}//Для всей номенклатуры
		///<summary>
		///(Общ) Процент скидки по умолчанию (сумма или процент)
		///</summary>
		public decimal/*(15.2)*/ ПроцентСкидкиНаценки {get;set;}//Процент скидки наценки
		///<summary>
		///(Общ) Значение условия скидки
		///</summary>
		public object ЗначениеУсловия {get;set;}//Значение условия
		///<summary>
		///(Общее время начала действия скидки)
		///</summary>
		public DateTime ОбщееВремяНачала {get;set;}//Общее время начала
		///<summary>
		///(Общее время окончания действия скидки)
		///</summary>
		public DateTime ОбщееВремяОкончания {get;set;}//Общее время окончания
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.2)*/ ОграничениеСкидкиНаценки {get;set;}//Ограничение скидки наценки
		///<summary>
		///(Общ) Условие скидки-наценки
		///</summary>
		public V82.Перечисления/*Ссылка*/.УсловияСкидкиНаценки Условие {get;set;}
		public V82.СправочникиСсылка.Качество Качество {get;set;}
		public bool ДляВсехПолучателей {get;set;}//Для всех получателей
		public bool ПоДнямНедели {get;set;}//По дням недели
		public V82.Перечисления/*Ссылка*/.ВидыСкидок ВидСкидки {get;set;}//Вид скидки

		public V82.СправочникиОбъект.ТипыСкидокНаценок  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТипыСкидокНаценок();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Валюта = Валюта;
			Объект.ДляВсейНоменклатуры = ДляВсейНоменклатуры;
			Объект.ПроцентСкидкиНаценки = ПроцентСкидкиНаценки;
			Объект.ЗначениеУсловия = ЗначениеУсловия;
			Объект.ОбщееВремяНачала = ОбщееВремяНачала;
			Объект.ОбщееВремяОкончания = ОбщееВремяОкончания;
			Объект.ОграничениеСкидкиНаценки = ОграничениеСкидкиНаценки;
			Объект.Условие = Условие;
			Объект.Качество = Качество;
			Объект.ДляВсехПолучателей = ДляВсехПолучателей;
			Объект.ПоДнямНедели = ПоДнямНедели;
			Объект.ВидСкидки = ВидСкидки;
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