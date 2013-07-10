
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РасчетыПоСтраховымВзносам:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыПлатежейВГосБюджет ВидПлатежа {get;set;}//Вид платежа
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаПлатежа {get;set;}//Дата платежа
		[DataMember]
		[ProtoMember(14)]
		public DateTime МесяцРасчетногоПериода {get;set;}//Месяц расчетного периода
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(15.2)*/ ПФРСтраховая {get;set;}//ПФР Страховая
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.2)*/ ПФРНакопительная {get;set;}//ПФР Накопительная
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(15.2)*/ ФСС {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(15.2)*/ ФФОМС {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ ТФОМС {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(15.2)*/ ФССНесчастныеСлучаи {get;set;}//ФСС, несчастные случаи
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ ПФРПоДополнительномуТарифу {get;set;}//ПФР По дополнительному тарифу
		[DataMember]
		[ProtoMember(22)]
		public string/*(30)*/ ПлатежноеПоручениеФССНомер {get;set;}//Платежное поручение ФСС - номер
		[DataMember]
		[ProtoMember(23)]
		public string/*(30)*/ ПлатежноеПоручениеФСС_НС_ПЗНомер {get;set;}//Платежное поручение ФСС по страхованию от несчастных случаев
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийРасчетыПоСтраховымВзносам ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(25)]
		public DateTime ПлатежноеПоручениеФССДата {get;set;}//Платежное поручение ФСС - дата
		[DataMember]
		[ProtoMember(26)]
		public DateTime ПлатежноеПоручениеФСС_НС_ПЗДата {get;set;}//Платежное поручение ФСС по страхованию от несчастных случаев
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ ФССЕНВД {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ ПФРНаДоплатуКПенсииШахтерам {get;set;}//ПФР, на доплату к пенсии шахтерам
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document23165(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld24942RRef
						,_Fld24943
						,_Fld24944RRef
						,_Fld24945RRef
						,_Fld24946
						,_Fld24947
						,_Fld24948
						,_Fld24949
						,_Fld24950
						,_Fld24951
						,_Fld24952
						,_Fld24953
						,_Fld24954
						,_Fld24955
						,_Fld24956
						,_Fld24957RRef
						,_Fld24958
						,_Fld24959
						,_Fld24960
						,_Fld24961)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Комментарий
						,@Ответственный
						,@ВидПлатежа
						,@ДатаПлатежа
						,@МесяцРасчетногоПериода
						,@ПФРСтраховая
						,@ПФРНакопительная
						,@ФСС
						,@ФФОМС
						,@ТФОМС
						,@ФССНесчастныеСлучаи
						,@ПФРПоДополнительномуТарифу
						,@ПлатежноеПоручениеФССНомер
						,@ПлатежноеПоручениеФСС_НС_ПЗНомер
						,@ВидОперации
						,@ПлатежноеПоручениеФССДата
						,@ПлатежноеПоручениеФСС_НС_ПЗДата
						,@ФССЕНВД
						,@ПФРНаДоплатуКПенсииШахтерам)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23165
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld24942RRef	= @Организация
						,_Fld24943	= @Комментарий
						,_Fld24944RRef	= @Ответственный
						,_Fld24945RRef	= @ВидПлатежа
						,_Fld24946	= @ДатаПлатежа
						,_Fld24947	= @МесяцРасчетногоПериода
						,_Fld24948	= @ПФРСтраховая
						,_Fld24949	= @ПФРНакопительная
						,_Fld24950	= @ФСС
						,_Fld24951	= @ФФОМС
						,_Fld24952	= @ТФОМС
						,_Fld24953	= @ФССНесчастныеСлучаи
						,_Fld24954	= @ПФРПоДополнительномуТарифу
						,_Fld24955	= @ПлатежноеПоручениеФССНомер
						,_Fld24956	= @ПлатежноеПоручениеФСС_НС_ПЗНомер
						,_Fld24957RRef	= @ВидОперации
						,_Fld24958	= @ПлатежноеПоручениеФССДата
						,_Fld24959	= @ПлатежноеПоручениеФСС_НС_ПЗДата
						,_Fld24960	= @ФССЕНВД
						,_Fld24961	= @ПФРНаДоплатуКПенсииШахтерам
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВидПлатежа", ВидПлатежа.Ключ());
					Команда.Parameters.AddWithValue("ДатаПлатежа", ДатаПлатежа);
					Команда.Parameters.AddWithValue("МесяцРасчетногоПериода", МесяцРасчетногоПериода);
					Команда.Parameters.AddWithValue("ПФРСтраховая", ПФРСтраховая);
					Команда.Parameters.AddWithValue("ПФРНакопительная", ПФРНакопительная);
					Команда.Parameters.AddWithValue("ФСС", ФСС);
					Команда.Parameters.AddWithValue("ФФОМС", ФФОМС);
					Команда.Parameters.AddWithValue("ТФОМС", ТФОМС);
					Команда.Parameters.AddWithValue("ФССНесчастныеСлучаи", ФССНесчастныеСлучаи);
					Команда.Parameters.AddWithValue("ПФРПоДополнительномуТарифу", ПФРПоДополнительномуТарифу);
					Команда.Parameters.AddWithValue("ПлатежноеПоручениеФССНомер", ПлатежноеПоручениеФССНомер);
					Команда.Parameters.AddWithValue("ПлатежноеПоручениеФСС_НС_ПЗНомер", ПлатежноеПоручениеФСС_НС_ПЗНомер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ПлатежноеПоручениеФССДата", ПлатежноеПоручениеФССДата);
					Команда.Parameters.AddWithValue("ПлатежноеПоручениеФСС_НС_ПЗДата", ПлатежноеПоручениеФСС_НС_ПЗДата);
					Команда.Parameters.AddWithValue("ФССЕНВД", ФССЕНВД);
					Команда.Parameters.AddWithValue("ПФРНаДоплатуКПенсииШахтерам", ПФРНаДоплатуКПенсииШахтерам);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document23165
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}