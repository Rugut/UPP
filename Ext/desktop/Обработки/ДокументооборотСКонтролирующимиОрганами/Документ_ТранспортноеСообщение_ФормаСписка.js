Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 924,
	iconCls: 'bogus',
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
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:908px;height:405px;',
			height: 405,width: 908,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаТранспорта',
				},
				{
					text:'Тип',
				},
				{
					text:'ЦиклОбмена',
				},
				{
					text:'Отправитель',
				},
				{
					text:'Получатель',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'Статус',
				},
				{
					text:'ОтКогоАдрес',
				},
				{
					text:'ОтКогоПредставление',
				},
				{
					text:'Основание',
				},
				{
					text:'Тема',
				},
			]
		},
	]
});