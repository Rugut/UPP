Ext.require(['Данные.Документы.ДоговорНаВыполнениеРаботСФизЛицом'], function () 
{
	Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:350px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договор на выполнение работ с физ. лицом',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:14px;top:129px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Сотрудник',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:129px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:212px;top:307px;width:41px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВалютаДокумента',
			width: 86,
			height: 19,
			style: 'position:absolute;left:256px;top:307px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимость',
			text: 'Стоимость:',
			style: 'position:absolute;left:14px;top:307px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаЗаРаботу',
			style: 'position:absolute;left:102px;top:307px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:14px;top:428px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:428px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:14px;top:403px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:403px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Договор:',
			style: 'position:absolute;left:14px;top:180px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Сроки, с:',
			style: 'position:absolute;left:14px;top:235px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 86,
			height: 19,
			style: 'position:absolute;left:102px;top:235px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'по:',
			style: 'position:absolute;left:192px;top:235px;width:41px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 86,
			height: 19,
			style: 'position:absolute;left:236px;top:235px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:184px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:81px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:14px;top:105px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:105px;width:240px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчета',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:259px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Начисление:',
			style: 'position:absolute;left:14px;top:259px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Стороны',
			style: 'position:absolute;left:8px;top:59px;width:334px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Оплата:',
			style: 'position:absolute;left:14px;top:283px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ХарактерОплаты',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:283px;width:240px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КодВычета',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:379px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВычета',
			text: 'Код вычета:',
			style: 'position:absolute;left:14px;top:379px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Договор',
			style: 'position:absolute;left:102px;top:180px;width:240px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеОтраженияВУчета',
			width: 240,
			height: 19,
			style: 'position:absolute;left:102px;top:355px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтраженияВУчета',
			text: 'Учет:',
			style: 'position:absolute;left:14px;top:355px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Условия договора',
			style: 'position:absolute;left:8px;top:158px;width:334px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочее',
			style: 'position:absolute;left:8px;top:335px;width:334px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:202px;width:328px;height:28px;',
			height: 28,width: 328,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница авторских',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидАвторскогоДоговора',
			text: 'Вид авторского договора:',
			style: 'position:absolute;left:0px;top:0px;width:83px;height:28px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидАвторскогоДоговора',
			width: 240,
			height: 19,
			style: 'position:absolute;left:88px;top:6px;width:240px;height:19px;',
		},
					]
				},
				{
					title:'Страница студ отрядов',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Заключен со студентом, работающим в студотряде',
			style: 'position:absolute;left:0px;top:4px;width:328px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:350px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:350px;height:25px;',
			dock: 'bottom',
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
	]
	});
});