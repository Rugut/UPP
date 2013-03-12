Ext.define('Справочники.КонтактныеЛица.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Контактные лица',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:448px;height:280px;',
			height: 280,width: 448,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'ФИО',
					width:'220',
				},
				{
					text:'Дата рождения',
					width:'84',
				},
				{
					text:'Имя',
					width:'120',
				},
				{
					text:'Количество дней до напоминания',
					width:'14',
				},
				{
					text:'Напоминать о дне рождения',
					width:'20',
				},
				{
					text:'Описание',
					width:'120',
				},
				{
					text:'Отчество',
					width:'120',
				},
				{
					text:'Пол',
					width:'80',
				},
				{
					text:'Фамилия',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});