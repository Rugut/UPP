Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийРОКИ_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 741,
	iconCls: 'bogus',
	title: 'Список Кэш файлов с ресурса общей ключевой информации ""Такском""',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:725px;height:259px;',
			height: 259,width: 725,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'ИмяРесурса',
				},
				{
					text:'ДатаФайла',
				},
				{
					text:'Размер',
				},
				{
					text:'Расшифрован',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Очистить',
				},
			]
		},
	]
});