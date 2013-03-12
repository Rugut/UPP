Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:924px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Транспортные сообщения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:924px;height:25px;',
			items:
			[
				{
					text:'Действие11',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:908px;height:405px;',
			height: 405,width: 908,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'124',
				},
				{
					text:'Дата транспортировки',
					width:'144',
				},
				{
					text:'Тип',
					width:'120',
				},
				{
					text:'Цикл обмена',
					width:'120',
				},
				{
					text:'Отправитель',
					width:'120',
				},
				{
					text:'Получатель',
					width:'120',
				},
				{
					text:'Учетная запись',
					width:'120',
				},
				{
					text:'Статус',
					width:'112',
				},
				{
					text:'От кого (адрес)',
					width:'120',
				},
				{
					text:'От кого (представление)',
					width:'120',
				},
				{
					text:'Основание',
					width:'120',
				},
				{
					text:'Тема',
					width:'120',
				},
			]
		},
	]
});