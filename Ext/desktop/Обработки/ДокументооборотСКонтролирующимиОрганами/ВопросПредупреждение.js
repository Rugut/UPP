Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВопросПредупреждение',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:663px;height:218px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'ВНИМАНИЕ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОсновнойТекст',
			text: 'НадписьОсновнойТекст',
			style: 'position:absolute;left:92px;top:14px;width:551px;height:92px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:21px;top:114px;width:622px;height:6px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:92px;top:132px;width:551px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:92px;top:158px;width:551px;height:16px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:193px;width:663px;height:25px;',
			width: 663,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Продолжить',
					tooltip:'Продолжить',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Отмена',
				},
			]
		},
	]
	});
});