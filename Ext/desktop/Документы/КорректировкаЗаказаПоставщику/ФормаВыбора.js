Ext.define('Документы.КорректировкаЗаказаПоставщику.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:520px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки заказов поставщикам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:504px;height:380px;',
			height: 380,width: 504,
			columns:
			[
				{
					text:'',
					width:'32',
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
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Заказ поставщику',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});