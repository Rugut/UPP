Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков по взаиморасчетам',
	
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
					width:'21',
				},
				{
					text:'Расчеты',
					width:'59',
				},
				{
					text:'Проводки',
					width:'60',
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
					text:'Организация',
					width:'120',
				},
				{
					text:'Вид операции',
					width:'200',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});