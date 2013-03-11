Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОПолучении',
	{
	extend: 'Ext.window.Window',
	height: 179,width: 648,
	iconCls: 'bogus',
	title: 'Извещение о получении',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:154px;width:648px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяПолучения',
			style: 'position:absolute;left:173px;top:8px;width:467px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:632px;height:90px;',
			height: 90,width: 632,
			columns:
			[
				{
					text:'ИмяФайла',
				},
			]
		},
	]
});