
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
	public partial class НастройкиАналитикиУчета:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("499ec507-a418-47ff-8f7e-37d01c34e0f5");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190709.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*25*/ Код {get;set;}
		public string/*50*/ Наименование {get;set;}
		public bool УправленческийУчет {get;set;}//Управленческий учет
		public bool РегламентированныйУчет {get;set;}//Регламентированный учет
		public object ЗначениеПоУмолчанию {get;set;}//Значение по умолчанию
		public bool ТолькоПросмотр {get;set;}//Только просмотр
		public bool ТолькоПросмотрРегл {get;set;}//Только просмотр регл.

		public V82.СправочникиОбъект.НастройкиАналитикиУчета  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиАналитикиУчета();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.УправленческийУчет = УправленческийУчет;
			Объект.РегламентированныйУчет = РегламентированныйУчет;
			Объект.ЗначениеПоУмолчанию = ЗначениеПоУмолчанию;
			Объект.ТолькоПросмотр = ТолькоПросмотр;
			Объект.ТолькоПросмотрРегл = ТолькоПросмотрРегл;
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