Ext.define('Справочники.МедицинскиеОрганизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Медицинские организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:259px;',
			height: 259,width: 460,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'ОГРН',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действия формы выбрать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				'-',
			]
		},
	]
});