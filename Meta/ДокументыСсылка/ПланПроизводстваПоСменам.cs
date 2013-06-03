
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
	public partial class ПланПроизводстваПоСменам:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("37bea486-5231-4808-b7d4-f1f66eabcd3d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191019.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		public DateTime МоментЗапасов {get;set;}//Момент запасов
		public DateTime НачальнаяГраница {get;set;}//Начальная граница
		///<summary>
		///Флаг использования механизма детального планирования
		///</summary>
		public bool ИспользоватьДетальныеИсточники {get;set;}//Использовать детальные источники
		///<summary>
		///Флаг выполнения разузлования номенклатуры при получении данных механизмом детального планирования
		///</summary>
		public bool РазузловатьПриПолучении {get;set;}//Разузловать при получении
		///<summary>
		///Флаг автоматической свертки по комплектующим при получении данных механизмом детального планирования
		///</summary>
		public bool АвтоСвертка {get;set;}//Авто свертка
		
		public ПланПроизводстваПоСменам()
		{
		}
		
		public ПланПроизводстваПоСменам(byte[] УникальныйИдентификатор)
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
					,_Fld12938 [Комментарий]
					,_Fld12939RRef [Ответственный]
					,_Fld12940RRef [Подразделение]
					,_Fld12941RRef [Проект]
					,_Fld12942 [МоментЗапасов]
					,_Fld12943 [НачальнаяГраница]
					,_Fld12944 [ИспользоватьДетальныеИсточники]
					,_Fld12945 [РазузловатьПриПолучении]
					,_Fld12946 [АвтоСвертка]
					From _Document513(NOLOCK)
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
							МоментЗапасов = Читалка.GetDateTime(8);
							НачальнаяГраница = Читалка.GetDateTime(9);
							ИспользоватьДетальныеИсточники = ((byte[])Читалка.GetValue(10))[0]==1;
							РазузловатьПриПолучении = ((byte[])Читалка.GetValue(11))[0]==1;
							АвтоСвертка = ((byte[])Читалка.GetValue(12))[0]==1;
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
		
		public V82.ДокументыОбъект.ПланПроизводстваПоСменам  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПланПроизводстваПоСменам();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.Проект = Проект;
			Объект.МоментЗапасов = МоментЗапасов;
			Объект.НачальнаяГраница = НачальнаяГраница;
			Объект.ИспользоватьДетальныеИсточники = ИспользоватьДетальныеИсточники;
			Объект.РазузловатьПриПолучении = РазузловатьПриПолучении;
			Объект.АвтоСвертка = АвтоСвертка;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПланПроизводстваПоСменам ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПланПроизводстваПоСменам)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПланПроизводстваПоСменам(УникальныйИдентификатор);
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