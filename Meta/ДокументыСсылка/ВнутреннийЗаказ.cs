
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
	public partial class ВнутреннийЗаказ:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8cc62dad-1d6d-4118-8df0-147c1b9efe3f");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191916.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.ВидыВнутреннегоЗаказа ВидЗаказа {get;set;}//Вид заказа
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаОтгрузки {get;set;}//Дата отгрузки
		///<summary>
		///(Общ)
		///</summary>
		public object Заказчик {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ФизическиеЛица Исполнитель {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения ПодразделениеИсполнитель {get;set;}//Подразделение исполнитель
		public V82.ДокументыСсылка.Событие ДокументОснование {get;set;}//Документ основание
		
		public ВнутреннийЗаказ()
		{
		}
		
		public ВнутреннийЗаказ(byte[] УникальныйИдентификатор)
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
					,_Fld5995RRef [ВидЗаказа]
					,_Fld5996 [ВремяНапоминания]
					,_Fld5997 [ДатаОтгрузки]
					,_Fld5998_TYPE [Заказчик_Тип],_Fld5998_RRRef [Заказчик],_Fld5998_RTRef [Заказчик_Вид]
					,_Fld5999 [Комментарий]
					,_Fld6000 [НапомнитьОСобытии]
					,_Fld6001RRef [Организация]
					,_Fld6002RRef [Ответственный]
					,_Fld6003RRef [Подразделение]
					,_Fld6004RRef [Исполнитель]
					,_Fld6005RRef [ПодразделениеИсполнитель]
					,_Fld6006RRef [ДокументОснование]
					From _Document333(NOLOCK)
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
							ВидЗаказа = V82.Перечисления/*Ссылка*/.ВидыВнутреннегоЗаказа.ПустаяСсылка.Получить((byte[])Читалка.GetValue(4));
							ВремяНапоминания = Читалка.GetDateTime(5);
							ДатаОтгрузки = Читалка.GetDateTime(6);
							Комментарий = Читалка.GetString(10);
							НапомнитьОСобытии = ((byte[])Читалка.GetValue(11))[0]==1;
							ДокументОснование = new V82.ДокументыСсылка.Событие((byte[])Читалка.GetValue(17));
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
		
		public V82.ДокументыОбъект.ВнутреннийЗаказ  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ВнутреннийЗаказ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВидЗаказа = ВидЗаказа;
			Объект.ВремяНапоминания = ВремяНапоминания;
			Объект.ДатаОтгрузки = ДатаОтгрузки;
			Объект.Заказчик = Заказчик;
			Объект.Комментарий = Комментарий;
			Объект.НапомнитьОСобытии = НапомнитьОСобытии;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.Исполнитель = Исполнитель;
			Объект.ПодразделениеИсполнитель = ПодразделениеИсполнитель;
			Объект.ДокументОснование = ДокументОснование;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ВнутреннийЗаказ ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ВнутреннийЗаказ)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ВнутреннийЗаказ(УникальныйИдентификатор);
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