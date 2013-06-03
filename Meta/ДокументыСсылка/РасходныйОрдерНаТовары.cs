
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РасходныйОрдерНаТовары:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b07e96ea-2297-4e52-8259-7778eccbc78d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191539.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийРасходныйОрдер ВидОперации {get;set;}//Вид операции
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///Заполняется при поступлении товаров, принятых на ответственное хранение
		///</summary>
		public object ДокументПередачи {get;set;}//Документ передачи
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public РасходныйОрдерНаТовары()
		{
		}
		
		public РасходныйОрдерНаТовары(byte[] УникальныйИдентификатор)
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
					,_Fld15345RRef [ВидОперации]
					,_Fld15346RRef [Организация]
					,_Fld15347RRef [Склад]
					,_Fld15348RRef [Контрагент]
					,_Fld15349_TYPE [ДокументПередачи_Тип],_Fld15349_RRRef [ДокументПередачи],_Fld15349_RTRef [ДокументПередачи_Вид]
					,_Fld15350RRef [Подразделение]
					,_Fld15351 [Комментарий]
					,_Fld15352RRef [Ответственный]
					From _Document551(NOLOCK)
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
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийРасходныйОрдер.ПустаяСсылка.Получить((byte[])Читалка.GetValue(4));
							Комментарий = Читалка.GetString(12);
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
		
		public V82.ДокументыОбъект.РасходныйОрдерНаТовары  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РасходныйОрдерНаТовары();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВидОперации = ВидОперации;
			Объект.Организация = Организация;
			Объект.Склад = Склад;
			Объект.Контрагент = Контрагент;
			Объект.ДокументПередачи = ДокументПередачи;
			Объект.Подразделение = Подразделение;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РасходныйОрдерНаТовары ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РасходныйОрдерНаТовары)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РасходныйОрдерНаТовары(УникальныйИдентификатор);
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