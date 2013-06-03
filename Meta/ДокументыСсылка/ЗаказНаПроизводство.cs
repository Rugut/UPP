
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
	public partial class ЗаказНаПроизводство:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("4cb8b0ff-6cc4-4c9b-80ce-b5ae7c82d44a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191831.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаИсполнения {get;set;}//Дата исполнения
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
		public V82.ДокументыСсылка.ЗаказНаПроизводство ОсновнойЗаказНаПроизводство {get;set;}//Основной заказ на производство
		///<summary>
		///Предполагаемая дата запуска заказа
		///</summary>
		public DateTime ДатаЗапуска {get;set;}//Дата запуска
		
		public ЗаказНаПроизводство()
		{
		}
		
		public ЗаказНаПроизводство(byte[] УникальныйИдентификатор)
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
					,_Fld6919 [ВремяНапоминания]
					,_Fld6920 [ДатаИсполнения]
					,_Fld6921 [Комментарий]
					,_Fld6922 [НапомнитьОСобытии]
					,_Fld6923RRef [Организация]
					,_Fld6924RRef [Ответственный]
					,_Fld6925RRef [Подразделение]
					,_Fld6926RRef [Исполнитель]
					,_Fld6927RRef [ОсновнойЗаказНаПроизводство]
					,_Fld6928 [ДатаЗапуска]
					From _Document361(NOLOCK)
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
							ВремяНапоминания = Читалка.GetDateTime(4);
							ДатаИсполнения = Читалка.GetDateTime(5);
							Комментарий = Читалка.GetString(6);
							НапомнитьОСобытии = ((byte[])Читалка.GetValue(7))[0]==1;
							ОсновнойЗаказНаПроизводство = new V82.ДокументыСсылка.ЗаказНаПроизводство((byte[])Читалка.GetValue(12));
							ДатаЗапуска = Читалка.GetDateTime(13);
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
		
		public V82.ДокументыОбъект.ЗаказНаПроизводство  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗаказНаПроизводство();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВремяНапоминания = ВремяНапоминания;
			Объект.ДатаИсполнения = ДатаИсполнения;
			Объект.Комментарий = Комментарий;
			Объект.НапомнитьОСобытии = НапомнитьОСобытии;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.Исполнитель = Исполнитель;
			Объект.ОсновнойЗаказНаПроизводство = ОсновнойЗаказНаПроизводство;
			Объект.ДатаЗапуска = ДатаЗапуска;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗаказНаПроизводство ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗаказНаПроизводство)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗаказНаПроизводство(УникальныйИдентификатор);
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