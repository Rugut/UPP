
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РаспределениеМатериаловНаВыпуск:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("de4a09a6-6373-447c-ba3c-56490d8efab1");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191842.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		///<summary>
		///(Общ)
		///</summary>
		public object Заказ {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		public V82.ДокументыСсылка.ИнвентаризацияНЗП ДокИнвентаризация {get;set;}//Документ инвентаризации
		public bool ИспользоватьПодразделенияНЗП {get;set;}//Использовать подразделения НЗП
		public bool ИспользоватьНаработку {get;set;}//Использовать наработку
		
		public РаспределениеМатериаловНаВыпуск()
		{
		}
		
		public РаспределениеМатериаловНаВыпуск(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld14973 [ДатаНачалаПериода]
					,_Fld14974 [ДатаОкончанияПериода]
					,_Fld14975_TYPE [Заказ_Тип],_Fld14975_RRRef [Заказ],_Fld14975_RTRef [Заказ_Вид]
					,_Fld14976 [Комментарий]
					,_Fld14977RRef [НоменклатурнаяГруппа]
					,_Fld14978RRef [Организация]
					,_Fld14979RRef [Ответственный]
					,_Fld14980 [ОтражатьВБухгалтерскомУчете]
					,_Fld14981 [ОтражатьВНалоговомУчете]
					,_Fld14982 [ОтражатьВУправленческомУчете]
					,_Fld14983RRef [Подразделение]
					,_Fld14984RRef [ПодразделениеОрганизации]
					,_Fld14985RRef [ДокИнвентаризация]
					,_Fld14986 [ИспользоватьПодразделенияНЗП]
					,_Fld14987 [ИспользоватьНаработку]
					From _Document546(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							ДатаНачалаПериода = Читалка.GetDateTime(4);
							ДатаОкончанияПериода = Читалка.GetDateTime(5);
							Комментарий = Читалка.GetString(9);
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(15))[0]==1;
							ДокИнвентаризация = new V82.ДокументыСсылка.ИнвентаризацияНЗП((byte[])Читалка.GetValue(18));
							ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(19))[0]==1;
							ИспользоватьНаработку = ((byte[])Читалка.GetValue(20))[0]==1;
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.РаспределениеМатериаловНаВыпуск  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РаспределениеМатериаловНаВыпуск();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ДатаНачалаПериода = ДатаНачалаПериода;
			Объект.ДатаОкончанияПериода = ДатаОкончанияПериода;
			Объект.Заказ = Заказ;
			Объект.Комментарий = Комментарий;
			Объект.НоменклатурнаяГруппа = НоменклатурнаяГруппа;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.Подразделение = Подразделение;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.ДокИнвентаризация = ДокИнвентаризация;
			Объект.ИспользоватьПодразделенияНЗП = ИспользоватьПодразделенияНЗП;
			Объект.ИспользоватьНаработку = ИспользоватьНаработку;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РаспределениеМатериаловНаВыпуск ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РаспределениеМатериаловНаВыпуск)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РаспределениеМатериаловНаВыпуск(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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