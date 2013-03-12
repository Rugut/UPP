Ext.define('Справочники.ТарифныеРазряды.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Тарифные разряды',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:164px;top:33px;width:360px;height:259px;',
			height: 259,width: 360,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:150px;height:259px;',
			height: 259,width: 150,
			columns:
			[
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:532px;height:25px;',
			items:
			[
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});