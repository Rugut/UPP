Ext.define('Документы.КонтролируемыеЗначенияПоБюджетам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контролируемые значения по бюджетам',
	
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
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Сценарий',
					width:'120',
				},
				{
					text:'Вид контролируемых значений',
					width:'120',
				},
				{
					text:'Использование контролируемых значений',
					width:'120',
				},
				{
					text:'Вид ограничения оборотов',
					width:'120',
				},
				{
					text:'Контролирующий сценарий',
					width:'120',
				},
				{
					text:'Ответственный',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});