Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_СерверыДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:734px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Серверы документооборота',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:718px;height:259px;',
			height: 259,width: 718,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'48',
				},
				{
					text:'Наименование',
					width:'195',
				},
				{
					text:'Адрес электронной почты (ФНС)',
					width:'186',
				},
				{
					text:'Адрес электронной почты (ПФР)',
					width:'186',
				},
				{
					text:'Адрес электронной почты (Росстат)',
					width:'186',
				},
				{
					text:'Таймаут',
					width:'64',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:734px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие10',
				},
			]
		},
	]
});