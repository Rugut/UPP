Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:561px;height:317px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:57px;width:455px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:33px;width:455px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:265px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:265px;width:455px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:561px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:292px;width:561px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:545px;height:173px;',
			height: 173,width: 545,
			items:
			[
				{
					title:'Отобрать ордера',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоОбработки',
			style: 'position:absolute;left:457px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:531px;height:116px;',
			height: 116,width: 531,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:238px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Создавать документы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодДетализации',
			text: 'Периодичность:',
			style: 'position:absolute;left:7px;top:54px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодДетализации',
			style: 'position:absolute;left:94px;top:54px;width:150px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:317px;top:56px;width:73px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:391px;top:56px;width:71px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:467px;top:56px;width:70px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШаблонРегулярногоДокумента',
			text: 'Шаблон:',
			style: 'position:absolute;left:6px;top:30px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШаблонРегулярногоДокумента',
			style: 'position:absolute;left:94px;top:30px;width:443px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРегулярногоДокумента',
			text: 'Вид:',
			style: 'position:absolute;left:6px;top:6px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРегулярногоДокумента',
			style: 'position:absolute;left:94px;top:6px;width:443px;height:19px;',
		},
					]
				},
				{
					title:'Расписание',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаОбработкиОрдеров',
			text: 'Начиная с:',
			style: 'position:absolute;left:396px;top:8px;width:57px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:6px;width:164px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:22px;top:28px;width:515px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задержка',
			style: 'position:absolute;left:278px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗадержка',
			text: 'дней',
			style: 'position:absolute;left:323px;top:54px;width:29px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обрабатывать документы за предыдущие: ',
			style: 'position:absolute;left:22px;top:54px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗадержка',
			text: '',
			style: 'position:absolute;left:39px;top:78px;width:498px;height:19px;',
		},
					]
				},
			]
		},
	]
});