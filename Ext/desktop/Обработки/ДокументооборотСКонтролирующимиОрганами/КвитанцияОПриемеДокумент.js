Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриемеДокумент',
	{
	extend: 'Ext.window.Window',
	height: 461,width: 496,
	iconCls: 'bogus',
	title: 'Квитанция о приеме',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:496px;height:25px;',
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
			name: 'ДатаВремяНапр',
			style: 'position:absolute;left:193px;top:57px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:193px;top:81px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:193px;top:9px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрин',
			style: 'position:absolute;left:193px;top:105px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:193px;top:33px;width:295px;height:19px;',
		},
	]
});