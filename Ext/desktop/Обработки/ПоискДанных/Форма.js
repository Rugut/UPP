Ext.require(['Данные.Обработки.ПоискДанных'], function () 
{
	Ext.define('Обработки.ПоискДанных.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:271px;height:492px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Поиск данных',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:44px;top:210px;width:183px;height:19px;',
			height: 19,width: 183,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Найдено',
			text: 'Введите строку поиска',
			style: 'position:absolute;left:20px;top:0px;width:142px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:57px;width:259px;height:153px;',
			height: 153,width: 259,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать описания',
			style: 'position:absolute;left:0px;top:105px;width:145px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Нечеткость',
			style: 'position:absolute;left:104px;top:81px;width:41px;height:19px;',
			width: 41,
			height: 19,
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:0px;top:20px;width:233px;height:56px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьМетаданные',
			text: '',
			style: 'position:absolute;left:238px;top:20px;width:21px;height:21px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ограничить области поиска:',
			style: 'position:absolute;left:0px;top:0px;width:166px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Нечеткость (%):',
			style: 'position:absolute;left:0px;top:81px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Размер порции:',
			style: 'position:absolute;left:0px;top:129px;width:103px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РазмерПорции',
			style: 'position:absolute;left:104px;top:129px;width:41px;height:19px;',
			width: 41,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:271px;height:53px;',
			height: 53,width: 271,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаПоиска',
			width: 259,
			height: 19,
			style: 'position:absolute;left:6px;top:5px;width:259px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:175px;top:26px;width:90px;height:24px;',
			width: 90,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Настройка поиска',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:76px;height:24px;',
			width: 76,
			height: 24,
			items:
			[
				{
					text:'Поиск',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:464px;width:259px;height:21px;',
			height: 21,width: 259,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'button',
			name: 'ОбновитьИндекс',
			text: 'Обновить индекс',
			style: 'position:absolute;left:1px;top:0px;width:117px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаАктуальностиИндекса',
			text: 'Дата актуальности индекса\r\nПризнак актуальности индекса',
			style: 'position:absolute;left:6px;top:432px;width:259px;height:27px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});