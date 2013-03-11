Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 601,
	iconCls: 'bogus',
	title: 'Элемент Источники данных для расчетов бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			items:
			[
				{
					text:'Проверить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПроизвольныйЗапрос',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:601px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеРегистра',
			style: 'position:absolute;left:94px;top:57px;width:499px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:585px;height:323px;',
			height: 323,width: 585,
			items:
			[
				{
					title:'Данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:571px;height:100px;',
			height: 100,width: 571,
			columns:
			[
				{
					text:'ИмяДатаГраницы',
				},
				{
					text:'ПредставлениеДатыГраницы',
				},
				{
					text:'НачальнаяГраницаОтсчета',
				},
				{
					text:'ДатаНачальнойГраницыОтсчета',
				},
				{
					text:'ПериодСмещения',
				},
				{
					text:'Сдвиг',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:173px;width:264px;height:124px;',
			height: 124,width: 264,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:149px;width:264px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'СнятьВсе',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:276px;top:173px;width:300px;height:124px;',
			height: 124,width: 300,
			columns:
			[
				{
					text:'ИмяПоляИсточника',
				},
				{
					text:'ИзмерениеБюджетирования',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:276px;top:149px;width:300px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:380px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:380px;height:273px;',
			height: 273,width: 380,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:571px;height:291px;',
			height: 291,width: 571,
			items:
			[
				{
					title:'Запрос',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:259px;width:144px;height:24px;',
			items:
			[
				{
					text:'КонструкторЗапросов',
				},
				{
					text:'Закончить',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:539px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:539px;height:253px;',
			height: 253,width: 539,
			columns:
			[
				{
					text:'ИмяПараметра',
				},
				{
					text:'ЗначениеПараметра',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:512px;top:33px;width:81px;height:19px;',
		},
	]
});