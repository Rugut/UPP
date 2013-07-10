
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
	public partial class КорректировкаЗаказаНаПроизводство:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("e9fce078-12b6-4230-bafc-afbb13906635");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012009.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
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
		public V82.ДокументыСсылка.ЗаказНаПроизводство ЗаказНаПроизводство {get;set;}//Заказ на производство
		///<summary>
		///(Общ)
		///</summary>
		public object ДокументОснование {get;set;}//Документ основание
		public V82.Перечисления/*Ссылка*/.ВидыОперацийКорректировкаЗаказаНаПроизводство ВидОперации {get;set;}//Вид операции
		
		public КорректировкаЗаказаНаПроизводство()
		{
		}
		
		public КорректировкаЗаказаНаПроизводство(byte[] УникальныйИдентификатор)
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
					,_Fld5676 [Комментарий]
					,_Fld5677RRef [Организация]
					,_Fld5678RRef [Ответственный]
					,_Fld5679RRef [Подразделение]
					,_Fld5680RRef [Исполнитель]
					,_Fld5684RRef [ЗаказНаПроизводство]
					,_Fld19489_TYPE [ДокументОснование_Тип],_Fld19489_RRRef [ДокументОснование],_Fld19489_RTRef [ДокументОснование_Вид]
					,_Fld19490RRef [ВидОперации]
					From _Document305(NOLOCK)
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
							Комментарий = Читалка.GetString(4);
							ЗаказНаПроизводство = new V82.ДокументыСсылка.ЗаказНаПроизводство((byte[])Читалка.GetValue(9));
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийКорректировкаЗаказаНаПроизводство.ПустаяСсылка.Получить((byte[])Читалка.GetValue(13));
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
		
		public V82.ДокументыОбъект.КорректировкаЗаказаНаПроизводство  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.КорректировкаЗаказаНаПроизводство();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Комментарий = Комментарий;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.Исполнитель = Исполнитель;
			Объект.ЗаказНаПроизводство = ЗаказНаПроизводство;
			Объект.ДокументОснование = ДокументОснование;
			Объект.ВидОперации = ВидОперации;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.КорректировкаЗаказаНаПроизводство ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.КорректировкаЗаказаНаПроизводство)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.КорректировкаЗаказаНаПроизводство(УникальныйИдентификатор);
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