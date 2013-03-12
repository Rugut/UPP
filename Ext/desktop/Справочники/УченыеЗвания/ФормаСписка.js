Ext.define('Справочники.УченыеЗвания.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Ученые звания',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Подбор из ОКИН',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
	]
});