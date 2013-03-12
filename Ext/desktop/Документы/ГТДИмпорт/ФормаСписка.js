Ext.define('Документы.ГТДИмпорт.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ГТД по импорту',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'УУ',
					width:'20',
				},
				{
					text:'БУ',
					width:'20',
				},
				{
					text:'НУ',
					width:'20',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Номер ГТД',
					width:'120',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Таможенный сбор валютный',
					width:'80',
				},
				{
					text:'Таможенный сбор',
					width:'80',
				},
				{
					text:'Таможенный штраф в валюте',
					width:'80',
				},
				{
					text:'Таможенный штраф',
					width:'80',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Договор контрагента (регл)',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});