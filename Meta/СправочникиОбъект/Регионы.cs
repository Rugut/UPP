
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///Регионы
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Регионы:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*150*/ Наименование {get;set;}
		///<summary>
		///Комментарий
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(5)*/ КодРегиона {get;set;}//Код региона
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(25)*/ КодАдресногоЭлемента {get;set;}//Код адресного элемента
		///<summary>
		///Железнодорожная станция назначения
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(100)*/ ЖДСтанцияНазначения {get;set;}//Ж/Д cтанция назначения
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference139(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Code
						,_Description
						,_Fld1715
						,_Fld1716
						,_Fld1717
						,_Fld1718)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@Код
						,@Наименование
						,@Комментарий
						,@КодРегиона
						,@КодАдресногоЭлемента
						,@ЖДСтанцияНазначения)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference139
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld1715	= @Комментарий
						,_Fld1716	= @КодРегиона
						,_Fld1717	= @КодАдресногоЭлемента
						,_Fld1718	= @ЖДСтанцияНазначения
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КодРегиона", КодРегиона);
					Команда.Parameters.AddWithValue("КодАдресногоЭлемента", КодАдресногоЭлемента);
					Команда.Parameters.AddWithValue("ЖДСтанцияНазначения", ЖДСтанцияНазначения);
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
					Команда.CommandText = @"Delete _Reference139
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/
		// флаг необходимости проверки соотвествия кода и кода региона

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*(НЕ ОбменДанными.Загрузка) и ПроверятьСоответствиеКодаИКодаРегиона*/)
			{
				/*// проверка правильности заполнения кода региона
*/
				//КодСтраны = Цел(КодАдресногоЭлемента / 100000000000);
				if(true/*КодСтраны = 643*/)
				{
					//КодРег = Цел((КодАдресногоЭлемента - КодСтраны * 100000000000) / 1000000000);
					/*// проверка соответствия кода и кода региона
*/
					if(true/*Строка(КодРег) <> КодРегиона*/)
					{
						/*Ответ = Вопрос("Код региона не соответствует коду адресного элемента. Установить код региона автоматически?",
								РежимДиалогаВопрос.ДаНет, , , "Проверка кода региона");*/
						if(true/*Ответ = КодВозвратаДиалога.Да*/)
						{
							//КодРегиона = Строка(КодРег);
						}
					}
				}
			}
		}
		// ТЕКСТ ОСНОВНОЙ ПРОГРАММЫ
		///////////////////////////////////////////////////////////////////////////////
	}
}