Ext.require(['Данные.Обработки.ДопроведениеДокументов'], function () 
{
	Ext.define('Обработки.ДопроведениеДокументов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:427px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Допроведение документов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНастройкаДопроведения',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:33px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НастройкаДопроведенияДокументов',
			width: 345,
			height: 19,
			style: 'position:absolute;left:74px;top:33px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбрабатыватьДокументы',
			text: 'Документы:',
			style: 'position:absolute;left:8px;top:57px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоИнтервалаДопроведения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:78px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:163px;top:126px;width:15px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецИнтервалаДопроведения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:183px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:126px;width:19px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:169px;width:411px;height:89px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизации',
			text: 'Организации:',
			style: 'position:absolute;left:8px;top:150px;width:83px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:8px;top:126px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'только требующие допроведения',
			style: 'position:absolute;left:31px;top:81px;width:194px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'все',
			style: 'position:absolute;left:31px;top:102px;width:40px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:427px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить допроведение',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:427px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});