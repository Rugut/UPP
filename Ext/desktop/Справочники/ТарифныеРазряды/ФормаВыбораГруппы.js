Ext.define('Справочники.ТарифныеРазряды.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы тарифных разрядов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
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
				'-',
				{
					text:'',
				},
				{
					text:'Действие16',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Кнопка выбрать',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});