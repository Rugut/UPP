Ext.define('Документы.ОтчетОРозничныхПродажах.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчеты о розничных продажах',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:564px;height:380px;',
			height: 380,width: 564,
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
					text:'Склад',
					width:'105',
				},
				{
					text:'Касса ККМ',
					width:'120',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'91',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});