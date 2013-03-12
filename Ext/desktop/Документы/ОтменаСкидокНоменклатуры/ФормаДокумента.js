Ext.define('Документы.ОтменаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:739px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отмена скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:37px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'От:',
			style: 'position:absolute;left:183px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:204px;top:33px;width:163px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:62px;width:384px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:86px;width:722px;height:152px;',
			height: 152,width: 722,
			columns:
			[
				{
					text:'N',
					width:'50',
				},
				{
					text:'Установка скидок номенклатуры',
					width:'306',
				},
				{
					text:'Вид операции',
					width:'124',
				},
				{
					text:'Вид скидки',
					width:'87',
				},
				{
					text:'Дата начала',
					width:'93',
				},
				{
					text:'Дата окончания',
					width:'94',
				},
				{
					text:'Условие',
					width:'192',
				},
				{
					text:'Значение условия',
					width:'100',
				},
				{
					text:'Тип скидки',
					width:'138',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:739px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:7px;top:244px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:95px;top:244px;width:636px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:269px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:269px;width:636px;height:19px;',
		},
	]
});