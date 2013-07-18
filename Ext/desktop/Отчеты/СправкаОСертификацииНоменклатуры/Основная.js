Ext.require(['Данные.Отчеты.СправкаОСертификацииНоменклатуры'], function () 
{
	Ext.define('Отчеты.СправкаОСертификацииНоменклатуры.Основная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справка о сертификации номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьИнтервал',
			text: 'Период подачи заявок с:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 96,
			height: 19,
			style: 'position:absolute;left:157px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:284px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 96,
			height: 19,
			style: 'position:absolute;left:368px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'КонтрТХТ',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:58px;width:65px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Контрагент',
			width: 175,
			height: 19,
			style: 'position:absolute;left:78px;top:58px;width:175px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВидНомТХТ',
			text: 'Номенклатура:',
			style: 'position:absolute;left:284px;top:58px;width:82px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Номенклатура',
			width: 175,
			height: 19,
			style: 'position:absolute;left:368px;top:58px;width:175px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внешняя сертификация',
			style: 'position:absolute;left:8px;top:83px;width:147px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внутренняя сертификация',
			style: 'position:absolute;left:284px;top:83px;width:161px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:466px;top:33px;width:20px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});