Ext.define('Справочники.СценарииПланирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:543px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:529px;height:225px;',
			height: 225,width: 529,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:6px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:157px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:58px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:157px;top:58px;width:364px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Детализация планирования:',
			style: 'position:absolute;left:6px;top:32px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДетализацияПланирования',
			style: 'position:absolute;left:157px;top:32px;width:364px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по суммам (планирование продаж, производства, закупок)',
			style: 'position:absolute;left:6px;top:110px;width:350px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по количеству (планирование продаж, производства, закупок)',
			style: 'position:absolute;left:6px;top:132px;width:370px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Валюта планирования:',
			style: 'position:absolute;left:6px;top:84px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:157px;top:84px;width:107px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать курсы сценария',
			style: 'position:absolute;left:6px;top:154px;width:180px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:399px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:441px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Курсы валют',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаКурсов',
			style: 'position:absolute;left:58px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаТекст',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:6px;width:50px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:79px;width:515px;height:120px;',
			height: 120,width: 515,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Курс',
					width:'80',
				},
				{
					text:'Кратность',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:55px;width:515px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'Заполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:144px;top:6px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});