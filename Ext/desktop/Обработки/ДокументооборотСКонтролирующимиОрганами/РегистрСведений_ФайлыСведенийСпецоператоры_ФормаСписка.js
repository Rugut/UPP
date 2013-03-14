Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийСпецоператоры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Кэш файлов Спецоператоров',
	
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
					width:'24',
				},
				{
					text:'Учетная запись',
					width:'350',
				},
				{
					text:'Данные',
					width:'100',
				},
				{
					text:'Дата обновления файла на сервере',
					width:'140',
				},
				{
					text:'Размер (в байтах)',
					width:'70',
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