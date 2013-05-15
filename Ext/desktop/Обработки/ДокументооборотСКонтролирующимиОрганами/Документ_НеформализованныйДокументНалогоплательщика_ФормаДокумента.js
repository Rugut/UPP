Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалогоплательщика_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:591px;height:476px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:57px;width:477px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:451px;width:591px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'fieldset',
			title: 'Содержание',
			style: 'position:absolute;left:8px;top:112px;width:575px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:106px;top:33px;width:107px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:251px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:220px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип:',
			style: 'position:absolute;left:8px;top:134px;width:95px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:575px;height:291px;',
			height: 291,width: 575,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Текст',
					items:
					[
		{
			xtype: 'label',
			name: 'ИмяДокумента',
			text: '',
			style: 'position:absolute;left:97px;top:7px;width:430px;height:18px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Содержимое',
			style: 'position:absolute;left:0px;top:28px;width:575px;height:263px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТема',
			text: 'Тема (имя файла):',
			style: 'position:absolute;left:0px;top:7px;width:95px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Тема',
			style: 'position:absolute;left:98px;top:4px;width:426px;height:19px;',
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Документ:',
			style: 'position:absolute;left:0px;top:7px;width:95px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:81px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрацияВИФНС',
			style: 'position:absolute;left:106px;top:81px;width:477px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'обычный текст',
			style: 'position:absolute;left:106px;top:134px;width:101px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'внешний документ (doc-, rtf- или xls-файл)',
			style: 'position:absolute;left:220px;top:134px;width:233px;height:15px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:591px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
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
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Скопировать',
				},
				'-',
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});