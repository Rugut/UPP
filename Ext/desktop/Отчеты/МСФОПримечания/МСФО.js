Ext.define('Отчеты.МСФОПримечания.МСФО',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 780,
	iconCls: 'bogus',
	title: 'Примечания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Очистить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Заполнить',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РежимВводаИнформации',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:780px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'Действие2',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:765px;height:298px;',
			height: 298,width: 765,
			items:
			[
				{
					title:'Примечания',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПримечания',
			style: 'position:absolute;left:172px;top:251px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПримечания',
			style: 'position:absolute;left:298px;top:251px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПримечания',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:251px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПримечания',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:251px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ПримечанияСД',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПримечанияСД',
			style: 'position:absolute;left:172px;top:252px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПримечанияСД',
			style: 'position:absolute;left:298px;top:252px;width:289px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПримечанияСД',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:253px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПримечанияСД',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:253px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ДСОтОперДеят',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиДСОтОперДеят',
			style: 'position:absolute;left:172px;top:253px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийДСОтОперДеят',
			style: 'position:absolute;left:298px;top:253px;width:459px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:765px;height:49px;',
			height: 49,width: 765,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:224px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:80px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:545px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:380px;width:765px;height:21px;',
			height: 21,width: 765,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:2px;width:680px;height:19px;',
		},
					]
				},
			]
		},
	]
});