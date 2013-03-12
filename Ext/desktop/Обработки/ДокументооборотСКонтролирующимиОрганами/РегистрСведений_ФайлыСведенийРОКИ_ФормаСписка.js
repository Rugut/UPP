Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийРОКИ_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'20',
				},
				{
					text:'Учетная запись',
					width:'145',
				},
				{
					text:'Ресурс',
					width:'191',
				},
				{
					text:'Дата обновления файла на сервере',
					width:'206',
				},
				{
					text:'Размер (в байтах)',
					width:'115',
				},
				{
					text:'Расшифрован',
					width:'21',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			items:
			[
				'-',
				{
					text:'Очистить кэш',
				},
			]
		},
	]
});