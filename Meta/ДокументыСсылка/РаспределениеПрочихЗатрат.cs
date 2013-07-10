
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
	public partial class РаспределениеПрочихЗатрат:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f6e4aeba-6c77-4b88-8fec-16147d0cab4b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012032.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public object Заказ {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
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
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		public V82.ДокументыСсылка.ИнвентаризацияНЗП ДокументИнвентаризация {get;set;}//Документ инвентаризации
		public bool ИспользоватьПодразделенияНЗП {get;set;}//Использовать подразделения НЗП
		public bool ИспользоватьНаработку {get;set;}//Использовать наработку
		
		public РаспределениеПрочихЗатрат()
		{
		}
		
		public РаспределениеПрочихЗатрат(byte[] УникальныйИдентификатор)
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
					,_Fld10439RRef [Подразделение]
					,_Fld10440_TYPE [Заказ_Тип],_Fld10440_RRRef [Заказ],_Fld10440_RTRef [Заказ_Вид]
					,_Fld10441RRef [Организация]
					,_Fld10442 [Комментарий]
					,_Fld10443RRef [Ответственный]
					,_Fld10444 [ОтражатьВУправленческомУчете]
					,_Fld10445 [ОтражатьВБухгалтерскомУчете]
					,_Fld10446 [ОтражатьВНалоговомУчете]
					,_Fld10447 [ДатаНачалаПериода]
					,_Fld18837 [ДатаОкончанияПериода]
					,_Fld10448RRef [ПодразделениеОрганизации]
					,_Fld18458RRef [ДокументИнвентаризация]
					,_Fld18641 [ИспользоватьПодразделенияНЗП]
					,_Fld19091 [ИспользоватьНаработку]
					From _Document419(NOLOCK)
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
							Комментарий = Читалка.GetString(9);
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(11))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							ДатаНачалаПериода = Читалка.GetDateTime(14);
							ДатаОкончанияПериода = Читалка.GetDateTime(15);
							ДокументИнвентаризация = new V82.ДокументыСсылка.ИнвентаризацияНЗП((byte[])Читалка.GetValue(17));
							ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
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
		
		public V82.ДокументыОбъект.РаспределениеПрочихЗатрат  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РаспределениеПрочихЗатрат();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Подразделение = Подразделение;
			Объект.Заказ = Заказ;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ДатаНачалаПериода = ДатаНачалаПериода;
			Объект.ДатаОкончанияПериода = ДатаОкончанияПериода;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.ДокументИнвентаризация = ДокументИнвентаризация;
			Объект.ИспользоватьПодразделенияНЗП = ИспользоватьПодразделенияНЗП;
			Объект.ИспользоватьНаработку = ИспользоватьНаработку;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РаспределениеПрочихЗатрат ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РаспределениеПрочихЗатрат)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РаспределениеПрочихЗатрат(УникальныйИдентификатор);
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