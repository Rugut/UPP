Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриемеДокумент',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:461px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время направления:',
			style: 'position:absolute;left:8px;top:56px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяНапр',
			style: 'position:absolute;left:193px;top:57px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления:',
			style: 'position:absolute;left:8px;top:80px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:193px;top:81px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование формы:',
			style: 'position:absolute;left:8px;top:8px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:193px;top:9px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Дата принятия:',
			style: 'position:absolute;left:8px;top:104px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрин',
			style: 'position:absolute;left:193px;top:105px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:8px;top:32px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:193px;top:33px;width:295px;height:19px;',
		},
	]
});