Ext.define('Отчеты.ЭффективностьЗатратНаПривлечение.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Сохранить настройки',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Печать',
				},
				{
					text:'На принтер',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Новый отчет',
				},
				{
					text:'Загрузить настройки отчета',
				},
				{
					text:'Открыть в новом окне',
				},
				'-',
				'-',
				'-',
				{
					text:'Настройки...',
				},
				{
					text:'Сохранить настройки отчета',
				},
				{
					text:'Настройки...',
				},
				'-',
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Восстановить настройки',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:345px;top:33px;width:397px;height:107px;',
			height: 107,width: 397,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:397px;height:107px;',
			height: 107,width: 397,
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
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:475px;top:0px;width:275px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:485px;top:2px;width:260px;height:19px;',
			height: 19,width: 260,
			items:
			[
				{
					title:'Интервал',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНачалоПериода',
			style: 'position:absolute;left:52px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:136px;top:0px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКонецПериода',
			style: 'position:absolute;left:153px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:238px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:126px;top:0px;width:50px;height:19px;',
		},
					]
				},
				{
					title:'Период',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериод',
			style: 'position:absolute;left:178px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Пустой',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:331px;height:109px;',
			height: 109,width: 331,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период затрат',
			style: 'position:absolute;left:11px;top:19px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасходовС',
			style: 'position:absolute;left:121px;top:19px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:206px;top:19px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасходовПо',
			style: 'position:absolute;left:226px;top:19px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:310px;top:19px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Период результата ',
			style: 'position:absolute;left:13px;top:43px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриходовС',
			style: 'position:absolute;left:122px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:207px;top:43px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриходовПо',
			style: 'position:absolute;left:227px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода1',
			text: '...',
			style: 'position:absolute;left:310px;top:43px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Данные',
			style: 'position:absolute;left:122px;top:67px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормировать',
			text: 'Формировать по:',
			style: 'position:absolute;left:13px;top:67px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:122px;top:90px;width:185px;height:19px;',
		},
					]
				},
			]
		},
	]
});