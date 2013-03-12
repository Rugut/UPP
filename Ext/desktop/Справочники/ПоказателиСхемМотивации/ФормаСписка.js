Ext.define('Справочники.ПоказателиСхемМотивации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:570px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:554px;height:259px;',
			height: 259,width: 554,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'146',
				},
				{
					text:'Тип',
					width:'108',
				},
				{
					text:'Порядок ввода',
					width:'143',
				},
				{
					text:'Вид показателя',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:570px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие3',
				},
			]
		},
	]
});