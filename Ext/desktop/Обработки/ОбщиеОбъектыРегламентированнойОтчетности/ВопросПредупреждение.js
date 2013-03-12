Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ВопросПредупреждение',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:663px;height:218px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ВНИМАНИЕ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:193px;width:663px;height:25px;',
			items:
			[
				{
					text:'Продолжить',
				},
				{
					text:'Отмена',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойТекст',
			text: '',
			style: 'position:absolute;left:92px;top:14px;width:551px;height:92px;',
		},
	]
});