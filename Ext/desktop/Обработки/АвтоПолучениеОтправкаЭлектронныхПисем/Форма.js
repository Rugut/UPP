Ext.define('Обработки.АвтоПолучениеОтправкаЭлектронныхПисем.Форма',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 604,
	iconCls: 'bogus',
	title: 'Автополучение/отправка электронных писем',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:320px;',
			height: 320,width: 588,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'АдресЭлектроннойПочты',
				},
				{
					text:'ВремяПоследнегоПолучения',
				},
				{
					text:'Действие',
				},
				{
					text:'ИнтервалОбновления',
				},
			]
		},
	]
});