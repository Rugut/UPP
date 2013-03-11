Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОбОтзывеЗаявления',
	{
	extend: 'Ext.window.Window',
	height: 267,width: 513,
	iconCls: 'bogus',
	title: 'Сообщение об отзыве заявления',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:242px;width:513px;height:25px;',
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
			name: 'РегНомДок',
			style: 'position:absolute;left:202px;top:85px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОснОтз',
			style: 'position:absolute;left:202px;top:185px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегЭл',
			style: 'position:absolute;left:202px;top:115px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегБум',
			style: 'position:absolute;left:202px;top:150px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:202px;top:35px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодСтранПрод1',
			style: 'position:absolute;left:202px;top:215px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричЗам',
			style: 'position:absolute;left:202px;top:10px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:202px;top:60px;width:303px;height:19px;',
		},
	]
});