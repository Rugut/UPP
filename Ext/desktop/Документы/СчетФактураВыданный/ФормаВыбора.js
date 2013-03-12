Ext.define('Документы.СчетФактураВыданный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:691px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета-фактуры выданные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:675px;height:380px;',
			height: 380,width: 675,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Документ-основание',
					width:'120',
				},
				{
					text:'Вид счета-фактуры',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Исправление',
					width:'80',
				},
				{
					text:'Выставлен',
					width:'80',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:691px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Выбрать',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});