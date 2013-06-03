
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
	public partial class ИзменениеУсловийИсполнительногоЛиста:ДокументОбъект
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
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.ДокументыСсылка.ИсполнительныйЛист ИсполнительныйЛист {get;set;}//Исполнительный лист
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыДействияСНачислением Действие {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаИзменения {get;set;}//Дата изменения
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаУдержанийПоИЛ СпособРасчетаУдержания {get;set;}//Способ расчета удержания
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10.2)*/ Размер {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10.2)*/ Предел {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ПрожиточныеМинимумы ПрожиточныйМинимум {get;set;}//Прожиточный минимум
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(5.2)*/ ПроцентПочтовогоСбора {get;set;}//Процент почтового сбора
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ТарифыПочтовогоСбора Тариф {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.СпособыПеречисленийПоИсполнительномуЛисту СпособПеречисленияПоИсполнительномуЛисту {get;set;}//Способ перечисления по исполнительному листу
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ТарифыБанковНаДенежныеПереводы ТарифБанкаНаДенежныеПереводы {get;set;}//Тариф банка на денежные переводы
		[DataMember]
		[ProtoMember(23)]
		public bool ПочтовыйСборРассчитыватьПроцентом {get;set;}//Почтовый сбор рассчитывать процентом
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(0)*/ Комментарий {get;set;}
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
						Insert Into _Document400(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8051RRef
						,_Fld8052RRef
						,_Fld8053RRef
						,_Fld8054RRef
						,_Fld8055
						,_Fld8056
						,_Fld8057RRef
						,_Fld8058
						,_Fld8059
						,_Fld8060RRef
						,_Fld8061
						,_Fld8062RRef
						,_Fld8063RRef
						,_Fld8064RRef
						,_Fld8065
						,_Fld8066RRef
						,_Fld8067)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Физлицо
						,@Организация
						,@ИсполнительныйЛист
						,@Действие
						,@ДатаИзменения
						,@ДатаОкончания
						,@СпособРасчетаУдержания
						,@Размер
						,@Предел
						,@ПрожиточныйМинимум
						,@ПроцентПочтовогоСбора
						,@Тариф
						,@СпособПеречисленияПоИсполнительномуЛисту
						,@ТарифБанкаНаДенежныеПереводы
						,@ПочтовыйСборРассчитыватьПроцентом
						,@Ответственный
						,@Комментарий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document400
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8051RRef	= @Физлицо
						,_Fld8052RRef	= @Организация
						,_Fld8053RRef	= @ИсполнительныйЛист
						,_Fld8054RRef	= @Действие
						,_Fld8055	= @ДатаИзменения
						,_Fld8056	= @ДатаОкончания
						,_Fld8057RRef	= @СпособРасчетаУдержания
						,_Fld8058	= @Размер
						,_Fld8059	= @Предел
						,_Fld8060RRef	= @ПрожиточныйМинимум
						,_Fld8061	= @ПроцентПочтовогоСбора
						,_Fld8062RRef	= @Тариф
						,_Fld8063RRef	= @СпособПеречисленияПоИсполнительномуЛисту
						,_Fld8064RRef	= @ТарифБанкаНаДенежныеПереводы
						,_Fld8065	= @ПочтовыйСборРассчитыватьПроцентом
						,_Fld8066RRef	= @Ответственный
						,_Fld8067	= @Комментарий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ИсполнительныйЛист", ИсполнительныйЛист.Ссылка);
					Команда.Parameters.AddWithValue("Действие", Действие.Ключ());
					Команда.Parameters.AddWithValue("ДатаИзменения", ДатаИзменения);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("СпособРасчетаУдержания", СпособРасчетаУдержания.Ключ());
					Команда.Parameters.AddWithValue("Размер", Размер);
					Команда.Parameters.AddWithValue("Предел", Предел);
					Команда.Parameters.AddWithValue("ПроцентПочтовогоСбора", ПроцентПочтовогоСбора);
					Команда.Parameters.AddWithValue("СпособПеречисленияПоИсполнительномуЛисту", СпособПеречисленияПоИсполнительномуЛисту.Ключ());
					Команда.Parameters.AddWithValue("ПочтовыйСборРассчитыватьПроцентом", ПочтовыйСборРассчитыватьПроцентом);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document400
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}